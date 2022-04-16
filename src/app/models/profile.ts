export interface PROFILE {
    name: string;
    email: string,
    mobile: string,
    configuration: Object[]

}

export interface CONFIGURATION {
    id: number;
    configuration_type: string;
    description: string;
    checked: boolean;
    options?: any;
}



