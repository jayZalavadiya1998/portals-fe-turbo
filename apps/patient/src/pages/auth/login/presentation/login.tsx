import { useForm } from 'react-hook-form';
import { Button, Form, Input } from "@repo/ui/shadcn";

interface ILoginProps {
	loginHandler: any;
	handleRegister: any;
	handleSwitchForm: () => void;
	switchForm: boolean;
	isLoading: boolean;
}

const LoginScreen = (props: ILoginProps) => {
	const form: any = useForm();

	const onLoginSubmit = (formData: any) => {
		console.log("login =", formData);
		props.loginHandler(formData);
	};

	return (
		<div className="p-8">
			<div className="mx-auto flex w-full flex-col justify-center space-y-3 sm:w-[350px]">
				<div className="flex flex-col text-center">
					<p className="text-md font-bold text-foreground">
						Sign in to Patient Portal
					</p>
				</div>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onLoginSubmit)}>
						<div className="flex flex-col gap-4 py-2 pb-6">
							<div className="flex flex-col gap-2 items-start">
								<Input
									id="username"
									placeholder="name@example.com"
									{...form.register("username")}
								/>
							</div>
							<div className="flex flex-col gap-2 items-start">
								<Input
									id="password"
									type="password"
									placeholder="Password"
									{...form.register("password")}
								/>
							</div>
						</div>
						<Button className="md:right-8 md:top-8 w-full" type="submit">Sign In</Button>
					</form>
				</Form>
				<p className="px-8 text-center text-sm text-muted-foreground">
					<span
						onClick={props.handleSwitchForm}
						className="cursor-pointer hover:text-brand hover:underline underline-offset-2"
					>
						Don&apos;t have an account? Sign Up
					</span>
				</p>
			</div>
		</div>
	);
};

export default LoginScreen;
