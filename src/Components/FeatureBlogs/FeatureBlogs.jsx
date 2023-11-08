import { useLoaderData } from "react-router-dom";
import DataTable from 'react-data-table-component';
const FeatureBlogs = () => {
    const featureBlog = useLoaderData();
    const sort = featureBlog.sort((a, b) => { return b.description.length - a.description.length })
    const feature = sort.slice(0, 10);
    console.log(feature)
    const columns = [
        {
            name: 'Serial Number',
            selector: (row, index) => index++,
        },
        // {
        //     name: 'Image',
        //     selector: row => {
        //         <img className="w-20 h-20" src={row.image} alt="" />
        //     },
        // },
        {
            name: 'Blog Owner',
            selector: row => row.email,
        },
        {
            name: ' Blog Title',
            selector: row => row.title,
        },
    ];

    const data = [
        {
            id: 1,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
    ]

    return (
        <div>
            <DataTable
                columns={columns}
                data={feature}
            />

        </div>
    );
};

export default FeatureBlogs