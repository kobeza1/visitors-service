import { deleteVisitor } from "../../utils/api-service";
import css from "./Table.module.css";

export const Table = ({ visitors, handleClick }) => {
  return (
    <table className="table table-dark align-middle">
      <thead>
        <tr className="table-light">
          <th scope="col">ID</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Time</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {visitors.map((items) => (
          <tr className="table-dark" key={items.userId}>
            <th scope="row">{items.userId}</th>
            <td className="table-dark">{items.name}</td>
            <td className="table-dark">backend developer missed this field</td>
            <td className="table-dark">5:35</td>
            <td className="table-dark">
              <ul className={css.table__btns_list}>
                <li className={css.table__btns_item}>
                  <button
                    type="button"
                    className="btn btn-light"
                    onClick={() => handleClick()}
                  >
                    Edit
                  </button>
                </li>
                <li className={css.table__btns_item}>
                  <button
                    type="button"
                    className="btn btn-light"
                    onClick={() => deleteVisitor(items.userId)}
                  >
                    Delete
                  </button>
                </li>
              </ul>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
