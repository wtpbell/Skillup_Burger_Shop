import React, {useId} from 'react';

const IdGenerator = () => {
    const uniqueId = useId();
    return uniqueId
}

export default IdGenerator;