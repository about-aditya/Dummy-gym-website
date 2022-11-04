function validate(form) {
    fail = validateName(form.name.value);
    fail += validateMailID(form.email.value);
    fail += validatesubject(form.subject.value);
    fail += validatecomments(form.comments.value);

    if (fail == "") return true;
    else {
      alert(fail);
      return false;
    }
  }

  function validateName(field) {
    var name = /[^0-9]/;
    if (field == "") {
      return "Name cannot be empty\n";
    } else if (name.test(field)) {
      return "";
    } else {
      return "Please enter a valid Name.\n";
    }
  }

  function validateMailID(field) {
    let r = /[^a-zA-Z0-9.@_-]/;
    if (field == "") return "E-mail was not entered.\n";
    else if (
      !(field.indexOf(".") > 0 && field.indexOf("@") > 0) ||
      r.test(field)
    )
      return "Invalid E-mail.\n";
    else return "";
  }

  function validatesubject(field) {
    return field == ""
      ? "Please provide respective subject of feedback.\n"
      : "";
  }

  function validatecomments(field) {
    return field == "" ? "Comments cannot be blank.\n" : "";
  }