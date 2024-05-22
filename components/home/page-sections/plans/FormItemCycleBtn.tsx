import React, {useState} from 'react';
import {listPlanMonth} from '@/constants/family';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';


const FormItemCycleBtn = (props: any) => {
  const {selectCycle, setSelectedCycle, handleTracking} = props;
  const [cycle, setCycle] = useState<any>(listPlanMonth);


  const onSubmitTrack = async (item: any) => {
    try {
      const newData = {
        step: 'Select Plan',
        name_event: 'Chooose month',
        chooose_month: `${item.target.value} Month`,
      };

      if (handleTracking) {
        await handleTracking('Click-buttons', {...newData});
      }
    } catch (error) {
      console.error('err', error);
    }
  };

  const handleCycleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      onSubmitTrack(e);
      setSelectedCycle(e.target.value);
    } catch (error) {
      console.error('handleCycleChange', error);
    }
  };

  return (
    <div className="form-select-cycle-wrap">
      <FormControl component="fieldset" required >
        <RadioGroup
          aria-label="cycle"
          name="cycle"
          value={selectCycle}
          onChange={handleCycleChange}
          defaultValue={selectCycle}
          className="radio-form-cycle"
        >
          {cycle.map((item: any, index: number) => (
            <FormControlLabel
              key={index}
              value={item.value}
              control={<Radio />}
              label={item.label}
              className={`month-${item.value}`}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default FormItemCycleBtn;
