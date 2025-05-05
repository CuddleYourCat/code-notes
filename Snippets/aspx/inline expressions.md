## ASP.NET inline expressions in the .NET Framework

### To display result of an expression: <%= ... %>

```aspx-csharp
<%= DateTime.Now.ToString() %>
```

### Values from config or resource files: <%$ ... %>

```ascx-csharp
<%$ AppSettings: copyright %>">
```

---

### To run normal code

```aspx-csharp
<%...%>
```

### equivalent to Response.Write()

```aspx-csharp
<%=...%>
```

### Data Binding:

```aspx-csharp
<%#...%>
```

### returns the value of an expression, and can be used in parameters (note: expressions are not code)

```aspx-csharp
<%$...%>
```

### page directives, usually at the top of the ASPX file

```aspx-csharp
<%@...%>
```

### comments

```aspx-csharp
<%--...--%>
```

is the same as <%= except it HTML-encodes the value

```aspx-csharp
<%:...%>
```
