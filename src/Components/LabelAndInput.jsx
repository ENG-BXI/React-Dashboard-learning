export default function LabelAndInput(props) {
  // id  label type state useState
  return (
    <>
      <label htmlFor={props.id} className='form-label'>
        {props.Label}
      </label>
      <div>
        <input
          id={props.id}
          type={props.type}
          className='form-control mb-2'
          onChange={e => {
           props.type !=="file"? props.setState(e.target.value):props.setState(e.target.files.item(0))
          }}
          placeholder={props.Label}
        />
        {props.type === 'password' && (
          <div>
            <i class='ri-eye-fill'> </i>
            <h3>fdfs</h3>
          </div>
        )}
      </div>
    </>
  );
}
