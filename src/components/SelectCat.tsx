import { useRecoilState } from "recoil";
import styled from "styled-components";
import { Categories, categoryState } from "./atoms";


const Select = styled.select`
  font-size: 1rem;
  color: white;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: transparent;
  cursor: pointer;
`;

function SelectCat() {
  const [ category, setCategory ] = useRecoilState(categoryState);
  const onInput = (event:React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  return (
    <>
      <Select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>TO DO</option>
        <option value={Categories.DOING}>DOING</option>
        <option value={Categories.DONE}>DONE</option>
      </Select> 
    </>
  )
}

export default SelectCat;