export const ChangeGender =(str)=>({type:"CHANGE_GENDER" , payload:str})

export const IncrementAge=(val)=>({type:"INCREMENT_AGE" , payload:val})
export const DecrementAge=(val)=>({type:"DECREMENT_AGE" , payload:val})


export const ChangeBio = (text)=>({type:"CHANGE_BIO",payload:text})
export const ChangeUserAdult=()=>({type:"CHANGE_USER_ADULT"})

export const ChangeSkillText=(txt)=>({type:"CHANGE_SKILL_TEXT" , payload:txt})
export const AddSkill=()=>({type:"ADD_SKILL"})
export const ChangeActivationSkills =(id)=>({type:"CHANGE_ACTIVATION_SKILLS" , payload:id})