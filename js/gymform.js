
    function validate(form) {
      fail = validateName(form.name.value);
      fail += validateAge(form.age.value);
      fail += validateGender(form.gender.value);
      fail += validateMailID(form.email.value);
      fail += validatephone(form.phone.value);

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
        return "Please enter a valid Firstname.\n";
      }
    }

    function validateAge(field) {
      var age = /[0-9]/;
      if (field == "") {
        return "Age must be entered.\n";
      } else if (age.test(field)) {
        return "";
      } else {
        return "Please enter a valid Age.\n";
      }
    }

    function validateGender(field) {
      return field == "" ? "Gender was not selected.\n" : "";
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
    function validatephone(field) {
      var phoneno = /^\d{10}$/;
      if (field == "") {
        return "Please Enter your Phone Number.";
      } else if (phoneno.test(field)) {
        return "";
      } else {
        return "Please enter a Valid Phone Number.";
      }
    }