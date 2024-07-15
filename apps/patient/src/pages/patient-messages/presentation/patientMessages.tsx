import { useEffect, useState } from 'react';
import { MessageSearchComponent, Option } from "@repo/ui/shadcn";

const PatientMessagesScreen = () => {

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
    useEffect(() => {
        console.log(searchString);
    }, [searchString.filter.filters]);

    return (
        <>


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
            />



        </>
    );
};

export default PatientMessagesScreen;