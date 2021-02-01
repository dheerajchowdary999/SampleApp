export class qualification{
  constructor ( public Id,
    public Qualification:string,
     public Institute:string,
     public PassingYear:number,
     public Score:number){}

}
export class skill{
  constructor(public Id,
     public SkillCat:string,
     public Skill:string,
     public SkillLevel:string,
     public IsCurrent:string,
     public Experience:string){}
}
export class experience {
  constructor( public Id,
    public FromDate:string,
    public ToDate:string,
    public Organisation:string,
    public Experience:string,){}
}
export class registration{
  constructor( public EmployeeNo,
    public Name:string,
    public Title:string,
    public FirstName:string,
    public LastName:string,
    public MiddleName:string,
    public Gender:string,
    public DOB:string,
    public EmployeeAge:string,
    public OfficialPhone:string,
    public PersonalMobile:string,
    // public extn_ofc_phn:string,
    public Fax:string,
    public OfficialEmail:string,
    public PersonalEmail:string,
    public PhotoFile:string,
    public BirthPlace:string,
    public Religion:string,
    public Cast:string,
    public Nationality:string,
    public VoterId:string,
    public PAN:string,
    public Aadhar:string,
    public MaritalStatus:string,
    public BankName:string,
    public AccountType:string,
    public PaymentType:string,
    public AccountNumber:string,
    public IFSC:string,
    ){}
}
export class permanent{
  constructor( public Id:string,
    public AddressPermanent:string,
    public District:string,
    public Pin:string,
    public Country:string,
    public State:string,
    public City:string,
    ){}
}
export class present{
  constructor( public Id:string,
    public AddressPermanent:string,
    public District:string,
    public Pin:string,
    public Country:string,
    public State:string,
    public City:string,){}
}
