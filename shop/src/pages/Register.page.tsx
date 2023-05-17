import {AuthLayout, RegistrationFormComponent} from "../features/auth/components";

const RegisterPage = () => {
    return (
        <AuthLayout>
            <RegistrationFormComponent/>
        </AuthLayout>
    );
};

export {
    RegisterPage
};