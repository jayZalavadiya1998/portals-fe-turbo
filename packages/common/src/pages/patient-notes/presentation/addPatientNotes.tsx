import { Button, Card, CardContent, CardFooter, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Icons, Input, ScrollArea, Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetDescription, Popover, PopoverTrigger, PopoverContent, Command, CommandInput, CommandEmpty, CommandGroup, CommandItem, FormDescription, CommandList } from "@repo/ui/shadcn"
import { addPatientNotesSchema } from "./schema"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useEffect, useState } from "react"
import { cn } from "@repo/ui/utils"
import { SubjectTypeOptionsHook } from "../../../common-hooks/subjectTypeOptionsHook"
import { INotesCommonProps } from "./types"

interface IAddPatientNotes extends INotesCommonProps{
}
export const AddPatientNotes = (props: IAddPatientNotes) => {
    const { subjectOptionsData, fetchData } = SubjectTypeOptionsHook();

    const [open, setOpen] = useState(false);

    useEffect(() => {
        // This effect will triggered to fetch notes subject options
        props.sheetOpen && fetchData();
    }, [props.sheetOpen]);

    const onSubmit = async (formData: z.infer<typeof addPatientNotesSchema>) => {
        console.log('formdata =', formData)
        props.setIsLoading(true)
        props.handleSubmit(formData)
        props.setIsLoading(false)
      }

    const form = useForm<z.infer<typeof addPatientNotesSchema>>({
        resolver: zodResolver(addPatientNotesSchema),
        defaultValues: {
            subject_id: 0,
            note_text: '',
        },
    })

    return (
        <Sheet open={props.sheetOpen}>
            <SheetContent
                className="p-0 xl:w-[700px] xl:max-w-none md:w-[500px] sm:w-[400px] sm:max-w-[540px]"
                onOpenAutoFocus={(e: any) => e.preventDefault()}
            >
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <ScrollArea>
                        <Card className="w-full border-none p-0 m-0 h-screen">
                            <SheetHeader className="p-6 bg-red-600">
                                <SheetTitle>{props.isEdit ? 'Edit Notes' : 'Add Notes'}</SheetTitle>
                                <SheetDescription>
                                    {props.isEdit
                                        ? 'Edit the note details'
                                        : 'Create new note by filling the following details'
                                    }
                                </SheetDescription>
                            </SheetHeader>
                            {/* <CardHeader>
                            <CardTitle>{props.isEdit ? 'Edit Notes' : 'Add Notes'}</CardTitle>
                            <CardDescription>
                                {props.isEdit
                                ? 'Edit the note details'
                                : 'Create new note by filling the following details'}
                            </CardDescription>
                            </CardHeader> */}
                            <CardContent>
                                <div className="grid w-full items-center gap-4">

                                    <FormField
                                        control={form.control}
                                        name="subject_id"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-col">
                                            <FormLabel className="text-base">Subject</FormLabel>
                                            <Popover open={open} onOpenChange={setOpen}>
                                                <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        disabled={props.isBtnDisable}
                                                        variant="outline"
                                                        role="combobox"
                                                        className={cn(
                                                            "w-[200px] justify-between",
                                                            !field.value && "text-muted-foreground"
                                                        )}
                                                    >
                                                    {field.value
                                                        ? subjectOptionsData.find(
                                                            (language) => language.id === field.value
                                                        )?.display_text
                                                        : "Select language"}
                                                    <Icons.chevronUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                    </Button>
                                                </FormControl>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-[200px] p-0">
                                                <Command>
                                                    <CommandInput placeholder="Search language..." />
                                                    <CommandEmpty>No language found.</CommandEmpty>
                                                    <CommandGroup>
                                                    {subjectOptionsData.map((subject) => (
                                                        <CommandList>
                                                            <CommandItem
                                                                key={subject.display_text}
                                                                value={subject.id+''}
                                                                onSelect={() => {
                                                                    form.setValue("subject_id", subject.id)
                                                                    setOpen(false)
                                                                }}
                                                            >
                                                            <Icons.check
                                                                className={cn(
                                                                "mr-2 h-4 w-4",
                                                                subject.id === field.value
                                                                    ? "opacity-100"
                                                                    : "opacity-0"
                                                                )}
                                                            />
                                                            {subject.display_text}
                                                            </CommandItem>
                                                        </CommandList>
                                                    ))}
                                                    </CommandGroup>
                                                </Command>
                                                </PopoverContent>
                                            </Popover>
                                            <FormDescription>
                                                This is the language that will be used in the dashboard.
                                            </FormDescription>
                                            <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <div className="flex flex-col space-y-1.5">
                                        <FormField
                                            control={form.control}
                                            name="note_text"
                                            render={({ field }) => (
                                            <FormItem>
                                                <div className="space-y-0.5">
                                                <FormLabel className="text-base">Notes</FormLabel>
                                                </div>
                                                <FormControl>
                                                <Input disabled={props.isBtnDisable} placeholder="Notes" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                            )}
                                        />
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-end gap-4">
                            {props.isEdit == false && (
                                <>
                                <SheetClose asChild>
                                    <Button disabled={props.isBtnDisable} variant="secondary" className="w-fit">
                                        Cancel
                                    </Button>
                                </SheetClose>
                                <Button disabled={props.isBtnDisable} className="md:right-8 md:top-8 w-fit text-white" type="submit">
                                    {props.isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
                                    Submit
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