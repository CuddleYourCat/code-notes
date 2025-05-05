var ddaTemplate = new DdaTemplates
{
    HasHeaderRow = true,
    TemplateItems = new List<DdaTemplateItems>()
                    {
                        new DdaTemplateItems() {Key= "ReferenceNumber", PromptForValue = true}
                    }
};

var intface = model.GetType().GetInterface(nameof(IPayerPaymentEditViewModel));
if (intface != null)
{
    var propertyList = intface.GetProperties();
    foreach (var property in propertyList)
    {
        var updateValue = typeof(IPayerPaymentEditViewModel).GetProperty(property.Name)?.GetValue(model)?.ToString();  //convert model to sub interface and get the value
        if (updateValue != null)
        {
            ddaTemplate.TemplateItems.Add
            (
                new DdaTemplateItems()
                { Key = property.Name, DefaultValue = updateValue });
        }
    }
}

        private static Random random = new Random();
        public static string RandomString(int length)
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            return new string(Enumerable.Repeat(chars, length)
                                        .Select(s => s[random.Next(s.Length)]).ToArray());
        }

        private dynamic randomValue(PropertyInfo property, EncryptionService encryptionService)
        {
            try
            {
                if (property.PropertyType == typeof(DateTime) ||
                    property.PropertyType == typeof(DateTime?))
                {
                    return DateTime.Today.ToString("yyyy-MM-dd");
                }

                if (property.PropertyType == typeof(byte[]))
                {
                    return encryptionService.Encrypt(random.Next(999999).ToString());
                }

                if (property.PropertyType == typeof(int) ||
                    property.PropertyType == typeof(int?))
                {
                    return random.Next(1000);
                }

                if (property.PropertyType == typeof(bool) ||
                    property.PropertyType == typeof(bool?))
                {
                    return Convert.ToBoolean(random.Next(1));
                }

                return RandomString(15);
            }
            catch (Exception ex)
            {
                Debug.WriteLine(property.PropertyType);
                return null;
            }
        }
        private void populateFields(EditUploadedPayerViewModel model, EncryptionService encryptionService)
        {
            var props = model.GetType().GetProperties();

            foreach (var prop in props)
            {
                try
                {
                    model.GetType().GetProperty(prop.Name)?.SetValue(model, randomValue(prop, encryptionService));
                }
                catch (Exception ex)
                {
                    Debug.WriteLine(ex.InnerException);
                }
            }
        }