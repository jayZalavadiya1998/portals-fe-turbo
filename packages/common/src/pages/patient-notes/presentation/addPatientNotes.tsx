import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Option, ComboboxDemo, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Icons, Input, MessageSearchComponent, ScrollArea, Sheet, SheetClose, SheetContent } from "@repo/ui/shadcn"
import { addPatientNotesSchema } from "./schema"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useState } from "react"

interface IAddPatientNotes{
    sheetOpen: boolean
    setSheetOpen: React.Dispatch<React.SetStateAction<boolean>>
    isEdit: boolean
    setIsEdit: React.Dispatch<React.SetStateAction<boolean>>
}
export const AddPatientNotes = (props: IAddPatientNotes) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const OPTIONS: Option[] = [
        { label: 'To:', value: 'to_data' },
        { label: 'From:', value: 'from_data' },
        { label: 'Subject:', value: 'subject' },
        { label: 'Physician:', value: 'physician_name' },
    ];
    const [searchString, setSearchString] = useState<any>({
        filter: {
            filters: [],
            logic: 'and',
        },
        skip: 0,
        take: 100,
    });

    const onSubmit = async (formData: z.infer<typeof addPatientNotesSchema>) => {
        console.log('formdata =', formData)
        setIsLoading(true)
        // if (!res?.error) {
        //   toast.success(res.message)
        //   router.push('/login');
        // } else {
        //   console.log("toasted")
        //   toast.error(res.error, {
        //     action: {
        //       label: 'Close',
        //       onClick: () => console.log('Closed Toast'),
        //     },
        //   });
        // }
        props.setSheetOpen(false)
        setIsLoading(false)
      }

    const form = useForm<z.infer<typeof addPatientNotesSchema>>({
        resolver: zodResolver(addPatientNotesSchema),
        defaultValues: {
          note_text: '',
        },
    })
    console.log("log =", props.sheetOpen)
    return (
        <Sheet open={props.sheetOpen} onOpenChange={props.setSheetOpen}>
            <SheetContent
                className="p-0 xl:w-[700px] xl:max-w-none md:w-[500px] sm:w-[400px] sm:max-w-[540px]"
                onOpenAutoFocus={(e: any) => e.preventDefault()}
            >
                <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <ScrollArea>
                    <Card className="w-full border-none p-0 m-0 h-screen">
                        <CardHeader>
                        <CardTitle>{props.isEdit ? 'Edit Notes' : 'Add Notes'}</CardTitle>
                        <CardDescription>
                            {props.isEdit
                            ? 'Edit the note details'
                            : 'Create new note by filling the following details'}
                        </CardDescription>
                        </CardHeader>
                        <CardContent>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <FormField
                                    control={form.control}
                                    name="note_text"
                                    render={({ field }) => (
                                    <FormItem>
                                        <div className="space-y-0.5">
                                        <FormLabel className="text-base">Session Name</FormLabel>
                                        </div>
                                        <FormControl>
                                        <Input placeholder="Name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                    )}
                                />
                            </div>
                            
                            <ComboboxDemo/>
                            
                            
                            <MessageSearchComponent
                                defaultOptions={OPTIONS}
                                placeholder="Search ...."
                                emptyIndicator={
                                    <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                                        no results found.
                                    </p>
                                }
                                searchString={searchString}
                                setSearchString={setSearchString}
                                maxSelected={1}
                            />

                            {/* <div className="flex flex-col space-y-1.5">
                                <FormField
                                    control={form.control}
                                    name="subject"
                                    render={({ field }) => (
                                    <FormItem>
                                        <div className="space-y-0.5">
                                        <FormLabel className="text-base">Session Description</FormLabel>
                                        </div>
                                        <FormControl>
                                        <Textarea placeholder="Description" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                    )}
                                />
                            </div> */}
                           
                        </div>
                        </CardContent>
                        <CardFooter className="flex justify-end gap-4">
                        {props.isEdit == false && (
                            <>
                            <SheetClose asChild>
                                <Button variant={'ghost'} className="w-fit">
                                Cancel
                                </Button>
                            </SheetClose>
                            <Button className="md:right-8 md:top-8 w-fit" type="submit">
                                {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
                                Schedule
                            </Button>
                            </>
                        )}
                        {/* {isModified && props.isEdit && (
                            <>
                            <SheetClose asChild>
                                <Button variant={'ghost'} className="md:right-8 md:top-8 w-fit">
                                Discard
                                </Button>
                            </SheetClose>
                            <Button className="md:right-8 md:top-8 w-fit" type="submit">
                                {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
                                Save
                            </Button>
                            </>
                        )} */}
                        </CardFooter>
                    </Card>
                    </ScrollArea>
                </form>
                </Form>
            </SheetContent>
            </Sheet>
    )
}