GeneralForm Component:

The GeneralForm component manages form handling using the useFormik hook.
It collects user information such as email, age, password, and password confirmation.
It validates inputs using the basicSchema validation schema.
The onSubmit function processes data and resets the form upon form submission.
It disables the submit button based on formik.isSubmitting state.
It navigates to the portal page using the Link component.

PortalForm Component:

The PortalForm component manages form handling using Formik and Form components.
It collects user information such as username, university selection, and acceptance of terms checkbox.
It validates inputs using the advancedSchema validation schema.
The onSubmit function logs the data to the console upon form submission.
It disables the submit button based on formik.isSubmitting state.
It provides a Link component for returning to the main form.

CustomInput Component:

The CustomInput component is a custom input component created using the useField hook.
It accepts props like label and other properties, managed by Formik-provided field and meta data.
If there's an error, it adds the input-error class and displays the error message.

CustomSelect Component:

The CustomSelect component is a custom select component created using the useField hook.
It accepts props like label and other properties, managed by Formik-provided field and meta data.
If there's an error, it adds the input-error class and displays the error message.

CustomCheckBox Component:

The CustomCheckBox component is a custom checkbox component created using the useField hook.
User input and error states are managed by Formik.
If there's an error, it adds the input-error class and displays the error message.
It includes a text for accepting usage terms alongside.
