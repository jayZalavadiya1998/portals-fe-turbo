import { AuthHook, logoutService } from '@repo/common/common-library';
import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, Icons } from '@repo/ui/shadcn'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
function HeaderBar() {
    const { logout: authLogout } = AuthHook();
    const navigate = useNavigate();
    const logout = async () => {
        try {
            await logoutService.logout();
            toast.success('Logout Successfully')

        } catch (error: any) {
            error?.data?.details && toast.error(error?.data?.details)
        } finally {
            authLogout && authLogout();
            navigate('/login');
            localStorage.clear();
        }
    };

    return (
        <div style={{ backgroundColor: 'rgba(9,19,48)', height: '3.2rem', padding: '0px 15px 0px 15px', alignContent: 'center' }}>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                <div style={{ display: 'flex', gap: '30px' }}>
                    <img src="../../public/png/alera.png" alt=""
                        width={'150px'}
                    />
                    <h3 style={{ fontStyle: 'bold', fontSize: '1.2rem' }}>Patient Portal</h3>
                </div>

                <div style={{ border: '1px solid white', borderRadius: '3px', padding: '3px' }}>
                    <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="secondary" size="icon" className="rounded-full"
                                    style={{ width: "30px", height: "30px" }}
                                >
                                    <Icons.circleUser className="h-5 w-5" />
                                    <span className="sr-only">Toggle user menu</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>User Name</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Support</DropdownMenuItem>
                                <DropdownMenuItem>Change Password</DropdownMenuItem>
                                <DropdownMenuItem >Dark Mode</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={() => {
                                    logout()

                                }}>Logout</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <h1>jay zala</h1>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HeaderBar
