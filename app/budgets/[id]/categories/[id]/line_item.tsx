import { useState } from "react";
import {
  Autocomplete,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { NumericFormat } from 'react-number-format';

export default function LineItem({ lineItem, onUpdate, onDelete, addNewLineItem }) {
  const [name, setName] = useState(lineItem.name);
  const [quantity, setQuantity] = useState(lineItem.quantity);
  const [multiplier, setMultiplier] = useState(lineItem.multiplier);
  const [units, setUnits] = useState(lineItem.units);
  const [cost, setCost] = useState(lineItem.cost);

  function handleKeyUpEvent(e) {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      addNewLineItem();
    }
  }

  return (
    <tr onKeyUp={handleKeyUpEvent}>
      <td className="px-4">
        <TextField
          label="Description"
          multiline
          variant="standard"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            onUpdate();
          }}
        />
      </td>

      <td className="px-4">
        <TextField
          label="Quantity"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
          value={quantity}
          onChange={(e) => {
            setQuantity(parseFloat(e.target.value || "0"));
            onUpdate();
          }}
          onFocus={(e) => e.target.select()}
        />
      </td>

      <td className="px-4">
        <TextField
          label="X"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
          value={multiplier}
          onChange={(e) => {
            setQuantity(parseFloat(e.target.value || "0"));
            onUpdate();
          }}
          onFocus={(e) => e.target.select()}
        />
      </td>

      <td className="px-4">
        <Autocomplete
          options={['allow', 'flat', 'day', 'week']}
          value={units}
          onChange={(event, newValue) => {
            setUnits(newValue);
          }}
          renderInput={(params) => (
            <TextField {...params} variant="standard" />
          )}
        />
      </td>

      <td className="px-4">
        <NumericFormat
          value={cost/100.0}
          prefix="$"
          customInput={TextField}
          thousandSeparator
          onValueChange={(values, sourceInfo) => {
            setCost(parseInt(values.floatValue * 100));
            onUpdate();
          }}
          onFocus={(e) => e.target.select()}
        />
      </td>

      <td className="px-4">
        {lineItem.position}
      </td>
    </tr>
  );
}