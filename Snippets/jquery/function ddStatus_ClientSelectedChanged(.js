function ddStatus_ClientSelectedChanged(elem) {
            console.log($(elem));
            console.log($(`#${elem.id} :selected`).text());

            if ($(`#${elem.id} :selected`).text() === '<%=ContractStatus.Cancelled%>' &&        <%=lstCancellationReason.Items.Count %> > 0) {
                $('#CancellationReasonItem').show();
            }
            else {
                $('#CancellationReasonItem').hide();
            }

        }