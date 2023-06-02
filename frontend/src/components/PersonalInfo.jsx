import InputField from './InputField';

const PersonalInfo = () => {
  return (
    <>
      <InputField name='dni' type='number' placeholder='5320xxxx' content='DNI' id='dni' labelFor='dni' />
      
      <select name='country' className='py-3 px-2 border-2 border-gray-300 rounded-lg w-full ' placeholder='Country' id='country'>
        <option value="" hidden>Elige un país</option>
        <option value="Argentina">Argentina</option>
        <option value="Colombia">Colombia</option>
        <option value="Uruguay">Uruguay</option>
      </select>

      <InputField name='dni' type='number' placeholder='5320xxxx' content='DNI' id='dni' labelFor='dni' />
    </>
  );
}

export default PersonalInfo;
