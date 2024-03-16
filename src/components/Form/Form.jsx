import './Form.scss'

const formField = ( { name, label, type = 'text', options = null } ) => {
  return (
    <fieldset key={name} className={"form__field form__field--"+type}>
      <label htmlFor={name}>{label}</label>
      {
        type === 'textarea' ? <textarea name={name} id={name} cols="30" rows="10"></textarea> :
        type === 'select' ?   <select name={name} id={name}></select> :
        type === 'checkbox' ? (
          options.map( (option) => {
            return (
              <label key={option} htmlFor={option}>
                <input type="checkbox" name={name} id={option} />
                {option}
              </label>
            )
          })
        ) :
        type === 'radio' ?    <input type="radio" name={name} id={name} /> :
        <input type={type} name={name} id={name} />
      }
    </fieldset>
  )
}

export const Form = ( { fields, location } ) => {
  return (
    <form action="" method="post" className={'form form--'+location}>
      {
        fields.map( (field) => formField(field) )
      }
      <button type="submit">Send →</button>
    </form>
  )
}
