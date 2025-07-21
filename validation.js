export default function validateForm(data) {
  const errors = {};

  if (!data.name.trim()) {
    errors.name = "Name is required";
  }
//Only digits (0–9) Length between 4 and 10 digits
  if (!data.id.trim()) {
    errors.id = "ID is required";
  } else if (!/^[0-9]{4,10}$/.test(data.id)) {
    errors.id = "ID must be 4-10 digits";
  }

  return errors;
}
