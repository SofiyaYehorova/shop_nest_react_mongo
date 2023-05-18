import {RegisterFormField} from "./RegisterFormInterface";

export type NewUser= Omit<RegisterFormField, 'confirmPassword'>;