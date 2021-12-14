
export const LOAD_PROFILE = "LOAD_PROFILE";

export const loadProfile = profile => {
    
        return {
            type : LOAD_PROFILE,
            payload : {
                ...profile
            }
        }
    
}
