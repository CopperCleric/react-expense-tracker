import styled from "styled-components";

const ExpenseFilters = styled.div`
  color: white;
  padding: 0 1rem;
`;
const ExpenseFilterControl = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
`;
const Label = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Select = styled.select`
  font: inherit;
  padding: 0.5rem 3rem;
  font-weight: bold;
  border-radius: 6px;
`;

const ExpenseFilter = (props) => {
  const yearChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <ExpenseFilters>
      <ExpenseFilterControl>
        <Label>Filter by year</Label>
        <Select value={props.yearSelected} onChange={yearChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </Select>
        {/* Chart Here */}
      </ExpenseFilterControl>
    </ExpenseFilters>
  );
};

export default ExpenseFilter;
