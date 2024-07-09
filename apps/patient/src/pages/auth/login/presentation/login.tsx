import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Button, Form, Input } from "@repo/ui/shadcn";
import { Link, useLocation, Outlet } from 'react-router-dom';

interface ILoginProps {
	loginHandler: any;
	handleRegister: any;
	handleSwitchForm: () => void;
	switchForm: boolean;
	isLoading: boolean;
}

const LoginScreen = (props: ILoginProps) => {
	const form: any = useForm();
	const [subMenuOpen, setSubMenuOpen] = useState(false);
	const pathname = useLocation();


	const onLoginSubmit = (formData: any) => {
		console.log("login =", formData);
		props.loginHandler(formData);
	};

	const onRegisterSubmit = (formData: any) => {
		console.log("register =", formData);
		props.handleRegister(formData);
	};

	const toggleSubMenu = () => {
		setSubMenuOpen(!subMenuOpen);
	  };

	return (
		<div className='bg-green-300'>
			<button
				onClick={toggleSubMenu}
				className={`flex flex-row items-center p-2 rounded-lg hover-bg-blueBackground w-full justify-between hover:bg-blueBackground`}
			>
				<div className="flex flex-row space-x-4 items-center">
				</div>

				<div className={`${subMenuOpen ? 'rotate-180' : ''} flex ml-6`}>

hi				</div>
			</button>
			<div className="lg:p-8 bg-foreground">
				<div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
					<div className="flex flex-col space-y-2 text-center">
						{/* <Icons.logo className="mx-auto h-6 w-6" /> */}
						<h1 className="text-2xl font-semibold tracking-tight">
							Welcome back
						</h1>
						<p className="text-sm text-muted-foreground">
							Enter your email to sign in to your account
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
		</div>
	);
};

export default LoginScreen;
