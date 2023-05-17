import {AuthLayout, SigninFormComponent} from "../features/auth/components";

const SignInPage = () => {
    return (
        <AuthLayout>
            <SigninFormComponent/>
        </AuthLayout>
    );
};

export {
    SignInPage
};