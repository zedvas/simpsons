function SelectInput({selectHandler}) {
    return ( 
        <select onChange={(e)=>selectHandler(e)}>
        <option value="ASC">ASC</option>
        <option value="DESC">DESC</option>
      </select>

     );
}

export default SelectInput;
