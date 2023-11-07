import { useLoaderData } from "react-router-dom";
import MUIDataTable from "mui-datatables";
import Feature from "../Feature/Feature";

const FeatureBlogs = () => {
    const featureBlog = useLoaderData();
    const sort = featureBlog.sort((a, b) => { return b.description.length - a.description.length })
    const feature = sort.slice(0, 10);
    const columns = ["Name", "Company", "City", "State"];
    const data = [
        ["Joe James", "Test Corp", "Yonkers", "NY"],
        ["John Walsh", "Test Corp", "Hartford", "CT"],
        ["Bob Herm", "Test Corp", "Tampa", "FL"],
        ["James Houston", "Test Corp", "Dallas", "TX"],
    ];
    const options = {
        filterType: 'checkbox',
        responsive: 'standard',
    };
    return (
        <div>

            <MUIDataTable
                title={"Employee List"}
                data={feature.map(allData => <Feature key={allData._id} allData={allData}></Feature>)}
                columns={columns}
                options={options}
            />
        </div>
    );
};

export default FeatureBlogs;