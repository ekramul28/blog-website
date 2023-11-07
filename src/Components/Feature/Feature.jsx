import MUIDataTable from "mui-datatables";

const Feature = ({ allData }) => {
    const { title, email } = allData;
    const data = [
        [{ title }, "Test Corp", "Yonkers", "NY"],
        ["John Walsh", "Test Corp", "Hartford", "CT"],
        ["Bob Herm", "Test Corp", "Tampa", "FL"],
        ["James Houston", "Test Corp", "Dallas", "TX"],
    ];
    return (
        <div>
            <MUIDataTable
                data={data}
            />
        </div>
    );
};

export default Feature;