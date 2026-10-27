import React from 'react';
import { StyledButton, StyledList } from './filterSection.styles';

type FilterItem = {
  label: string;
  value: string;
};

type FilterSectionProps = {
  filters: FilterItem[];
  setActiveFilter: (filter: string) => void;
};

export function FilterSection({ filters, setActiveFilter }: FilterSectionProps) {
  return (
      <>
        <StyledList>
          {filters.map((filter, index) => (
            <React.Fragment key={filter.value}>
              {index < filters.length - 1 && 
                <StyledButton onClick={() => setActiveFilter(filter.value)}>
                  {filter.label}
                </StyledButton>
                }
              {/* {index < filters.length - 1 && <StyledSpacer>-</StyledSpacer>} */}
            </React.Fragment>
          ))}
        </StyledList>
        </>
  );
}


// import React from 'react';
// import { StyledList } from './filterSection.styles';
// import FilterBox from '../FilterBox/FilterBox';

// type FilterItem = {
//   label: string;
//   value: string;
// };

// type FilterSectionProps = {
//   filters: FilterItem[];
//   setActiveFilter: (filter: string) => void;
// };

// export function FilterSection({ filters, setActiveFilter }: FilterSectionProps) {
//   return (
//       <>
//         <StyledList>

//           {filters.map((filter, index) => (
//             <React.Fragment key={filter.value}>
//               {index < filters.length - 1 && 
//               <div onClick={() => setActiveFilter(filter.value)} >
//                 <FilterBox text={filter.label} />
//                 {/* <StyledButton onClick={() => setActiveFilter(filter.value)}>
//                   {filter.label}
//                 </StyledButton> */}
//               </div>
//                 }
//               {/* {index < filters.length - 1 && <StyledSpacer>-</StyledSpacer>} */}
//             </React.Fragment>
//           ))}
//         </StyledList>
//         </>
//   );
// }