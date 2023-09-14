import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetPagnation } from "../../pages/Listing/listingSlice";
import ReListingModal from "../ReListing/ReListingModal";
import Loader from "./Loader";

const ReListTable = ({ tableHeaders, tableData, isLoading }) => {
  const dispatch = useDispatch();
  const handleResetPagnation = () => {
    dispatch(resetPagnation());
  };
  return (
    <section class=" clear-right bg-white py-1 lg:py-[10px]">
      <div class="container">
        <div class="flex flex-wrap -mx-4">
          <div class="w-full px-4">
            <div class="max-w-full overflow-x-auto">
              {isLoading ? (
                <Loader />
              ) : (
                <table class="table-auto w-full">
                  <thead>
                    <tr class="bg-primary text-center">
                      {tableHeaders.map((header, key) => {
                        return (
                          <th
                            key={key}
                            class="
                           w-1/6
                           h-[16px]
                           min-w-[160px]
                           text-[13px]
                           font-semibold
                           text-white
                           py-2
                           lg:py-3
                           px-2
                           lg:px-3
                           border-l border-transparent
                           "
                          >
                            {header}
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((item, i) => {
                      return (
                        <tr key={i}>
                          <td
                            class="
                           text-center text-dark
                           text-base
                           py-5
                           px-2
                           bg-[#F3F6FF]
                           border-b border-l border-[#E8E8E8]
                           "
                          >
                            {i + 1}
                          </td>
                          <td
                            class="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-white
                           border-b border-[#E8E8E8]
                        
                           "
                          >
                            <div className="flex justify-center items-center">
                              <img src={item.image_url} className="w-14 h-10" />
                            </div>
                          </td>
                          <td
                            class="
                           text-center text-dark
                           text-base
                           py-5
                           px-2
                           bg-[#F3F6FF]
                           border-b border-[#E8E8E8]
                           "
                          >
                            {item.title}
                          </td>
                          <td
                            class="
                           text-center text-dark
                           text-base
                           py-5
                           px-2
                           bg-white
                           border-b border-[#E8E8E8]
                           "
                          >
                            {item.price}
                          </td>
                          <td
                            class="
                           text-center text-dark
                           text-base
                           py-5
                           px-2
                           bg-[#F3F6FF]
                           border-b border-[#E8E8E8]
                           "
                          >
                            {item.inventory}
                          </td>
                          <td
                            class="
                           text-center text-dark
                           text-base
                           py-5
                           px-2
                           bg-[#F3F6FF]
                           border-b border-[#E8E8E8]
                           "
                          >
                            {item.item_no}
                          </td>
                          <td
                            class="
                           text-center text-dark
                           text-base
                           py-5
                           px-2
                           bg-white
                           border-b border-r border-[#E8E8E8]
                           "
                          >
                            <ReListingModal item={item} />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReListTable;
