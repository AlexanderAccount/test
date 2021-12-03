import { useState, useEffect } from 'react';
import axios from 'axios';

export default function State () {
  const [ answer, setAnswer] = useState(null);
  
  useEffect(() => {
    axios.get('https://yesno.wtf/api')
        .then(res => {
          let dataRes = res.data;
          setAnswer(dataRes.answer);
          });
    }, []);
 
  if (answer === null) {
    return '...';
  };
  return answer === 'yes' ? 'Active' : '-';
};
