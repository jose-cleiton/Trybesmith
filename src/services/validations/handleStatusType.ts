const handleStatusType = (type: string) => { 
  switch (type) {
    case 'any.required': return 400;
    case 'array.base': return 422;
    default: return 422;
  }
};

export default handleStatusType;