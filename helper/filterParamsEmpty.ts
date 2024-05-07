export const filterParamsEmpty = (params: Record<string, any>) => {
    const filteredParams: Record<string, any>  = {};

    Object.keys(params).forEach((key: string) => {
        const value = params[key];
        
        if(typeof value === 'string' && value.trim() !== ''){
            filteredParams[key] = value;
        } 

        if(typeof value !== 'string' && value){
            filteredParams[key] = value;
        }

    })


    return filteredParams
}