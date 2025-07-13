// // src/components/VisitorTable.js
// import React from "react";

// export const VisitorTable = ({ visitors }) => {
  
//   if (!visitors || visitors.length === 0)
//     return (
//    <p className="text-center py-10 text-gray-500 font-medium text-lg flex flex-col items-center justify-center">
//   <img
//     src="https://i.gifer.com/ZZ5H.gif" // You can replace this with any loader GIF URL
//     alt="Loading..."
//     className="w-12 h-12 mb-4"
//   />
//   Data is fetching from backend...
// </p>

//     );

//   return (
//     <div className="space-y-10">
//          <DataSection title="🌍 IP & Geo Info">
//         <GeoInfoTable visitors={visitors} />
//       </DataSection>
     
//      <DataSection title="💻 Device Info">
//         <DeviceInfoTable visitors={visitors} />
//       </DataSection>
//       <DataSection title="🔹 Basic Info">
//         <BasicInfoTable visitors={visitors} />
//       </DataSection>

   

      

//       <DataSection title="📈 Marketing / Tracking Info">
//         <TrackingInfoTable visitors={visitors} />
//       </DataSection>

    
//     </div>
//   );
// };

// const DataSection = ({ title, children }) => (
//   <div className="mb-10">
//     <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
//     <div className="border rounded-2xl shadow bg-white p-4 overflow-x-auto">
//       <div className="overflow-y-auto max-h-[300px] min-w-[1000px]">{children}</div>
//     </div>
//   </div>
// );

// const renderCell = (val) => (val ? val : "-");

// const BasicInfoTable = ({ visitors }) => (
//   <table className="w-full text-sm text-gray-800 table-fixed border-collapse">
//     <thead className="sticky top-0 bg-blue-700 text-white">
//       <tr>
//         <th className="px-4 py-2 w-10">#</th>
//         <th className="px-4 py-2 w-40">Session ID</th>
//         <th className="px-4 py-2 w-48">Session Started</th>
//         <th className="px-4 py-2 w-40">Asset ID</th>
//         <th className="px-4 py-2 w-40">Ad Account ID</th>
//         <th className="px-4 py-2 w-64">Target URL</th>
//         <th className="px-4 py-2 w-48">Timestamp</th>
//       </tr>
//     </thead>
//     <tbody className="divide-y divide-gray-200">
//       {visitors.map((v, i) => (
//         <tr key={i} className="hover:bg-gray-50">
//           <td className="px-4 py-2">{i + 1}</td>
//           <td className="px-4 py-2">{renderCell(v.session_id)}</td>
//           <td className="px-4 py-2">{renderCell(v.session_start)}</td>
//           <td className="px-4 py-2">{renderCell(v.asset_id)}</td>
//           <td className="px-4 py-2">{renderCell(v.ad_account_id)}</td>
//           <td className="px-4 py-2 truncate">{renderCell(v.target_url)}</td>
//           <td className="px-4 py-2">
//             {v.timestamp ? new Date(v.timestamp).toLocaleString() : "-"}
//           </td>
//         </tr>
//       ))}
//     </tbody>
//   </table>
// );

// const GeoInfoTable = ({ visitors }) => (
//   <table className="w-full text-sm text-gray-800 table-fixed border-collapse">
//     <thead className="sticky top-0 bg-green-700 text-white">
//       <tr>
//         <th className="px-4 py-2 w-10">#</th>
//         <th className="px-4 py-2 w-40">IP</th>
//         {/* <th className="px-4 py-2 w-48">Hostname</th> */}
//         <th className="px-4 py-2 w-24">Proxy</th>
//         {/* <th className="px-4 py-2 w-32">Usage</th> */}
//         {/* <th className="px-4 py-2 w-32">Continent</th> */}
//         <th className="px-4 py-2 w-32">Country</th>
//         <th className="px-4 py-2 w-32">Region</th>
//         <th className="px-4 py-2 w-32">City</th>
//         <th className="px-4 py-2 w-24">ZIP</th>
        
//         <th className="px-4 py-2 w-24">LAT LONG</th>
//         <th className="px-4 py-2 w-48">Timezone</th>
//         <th className="px-4 py-2 w-24">ORG</th>
//         {/* <th className="px-4 py-2 w-48">ISP</th> */}
//       </tr>
//     </thead>
//     <tbody className="divide-y divide-gray-200">
//       {visitors.map((v, i) => (
//         <tr key={i} className="hover:bg-gray-50">
//           <td className="px-4 py-2">{i + 1}</td>
//           <td className="px-4 py-2">{renderCell(v.ip)}</td>
//           {/* <td className="px-4 py-2">{renderCell(v.ip_hostname)}</td> */}
//           <td className="px-4 py-2">{v.ip_proxy ? "Yes" : "No"}</td>
//           {/* <td className="px-4 py-2">{renderCell(v.ip_usage)}</td> */}
//           {/* <td className="px-4 py-2">{renderCell(v.continent)}</td> */}
//           <td className="px-4 py-2">{renderCell(v.country)}</td>
//           <td className="px-4 py-2">{renderCell(v.region)}</td>
//           <td className="px-4 py-2">{renderCell(v.city)}</td>
//           <td className="px-4 py-2">{renderCell(v.zip)}</td>
     
//           <td className="px-4 py-2">{renderCell(v.loc)}</td>
//           <td className="px-4 py-2">{renderCell(v.timezone)}</td>
//                <td className="px-4 py-2">{renderCell(v.org)}</td>
//           {/* <td className="px-4 py-2">{renderCell(v.isp)}</td> */}
//         </tr>
//       ))}
//     </tbody>
//   </table>
// );

// const DeviceInfoTable = ({ visitors }) => (
//   <table className="w-full text-sm text-gray-800 table-fixed border-collapse">
//     <thead className="sticky top-0 bg-purple-700 text-white">
//       <tr>
//         <th className="px-4 py-2 w-10">#</th>
//         <th className="px-4 py-2 w-40">Device Type</th>
//         <th className="px-4 py-2 w-40">OS</th>
//         <th className="px-4 py-2 w-40">Browser</th>
//       </tr>
//     </thead>
//     <tbody className="divide-y divide-gray-200">
//       {visitors.map((v, i) => (
//         <tr key={i} className="hover:bg-gray-50">
//           <td className="px-4 py-2">{i + 1}</td>
//           <td className="px-4 py-2">{renderCell(v.device_type)}</td>
//           <td className="px-4 py-2">{renderCell(v.os)}</td>
//           <td className="px-4 py-2">{renderCell(v.browser)}</td>
//         </tr>
//       ))}
//     </tbody>
//   </table>
// );

// const TrackingInfoTable = ({ visitors }) => (
//   <table className="w-full text-sm text-gray-800 table-fixed border-collapse">
//     <thead className="sticky top-0 bg-yellow-600 text-white">
//       <tr>
//         <th className="px-4 py-2 w-10">#</th>
//         <th className="px-4 py-2 w-48">UTM Source</th>
//         <th className="px-4 py-2 w-48">UTM Medium</th>
//         <th className="px-4 py-2 w-48">CG Tag</th>
//         <th className="px-4 py-2 w-48">Ad Platform</th>
//         <th className="px-4 py-2 w-48">GCLID</th>
//         <th className="px-4 py-2 w-48">FBCLID</th>
//       </tr>
//     </thead>
//     <tbody className="divide-y divide-gray-200">
//       {visitors.map((v, i) => (
//         <tr key={i} className="hover:bg-gray-50">
//           <td className="px-4 py-2">{i + 1}</td>
//           <td className="px-4 py-2">{renderCell(v.utm_source)}</td>
//           <td className="px-4 py-2">{renderCell(v.utm_medium)}</td>
//           <td className="px-4 py-2">{renderCell(v.cg_tag)}</td>
//           <td className="px-4 py-2">{renderCell(v.ad_platform)}</td>
//           <td className="px-4 py-2">{renderCell(v.gclid)}</td>
//           <td className="px-4 py-2">{renderCell(v.fbclid)}</td>
//         </tr>
//       ))}
//     </tbody>
//   </table>
// );

// // const GoogleAdsInfoTable = ({ visitors }) => (
// //   <table className="w-full text-sm text-gray-800 table-fixed border-collapse">
// //     <thead className="sticky top-0 bg-red-600 text-white">
// //       <tr>
// //         <th className="px-4 py-2 w-10">#</th>
// //         <th className="px-4 py-2 w-48">Campaign ID</th>
// //         <th className="px-4 py-2 w-48">Campaign Name</th>
// //         <th className="px-4 py-2 w-48">Ad Group ID</th>
// //         <th className="px-4 py-2 w-48">Ad Group Name</th>
// //         <th className="px-4 py-2 w-48">Ad ID</th>
// //         <th className="px-4 py-2 w-48">Keyword</th>
// //         <th className="px-4 py-2 w-48">Match Type</th>
// //         <th className="px-4 py-2 w-48">Placement</th>
// //         <th className="px-4 py-2 w-48">Placement Type</th>
// //         <th className="px-4 py-2 w-48">Ad URL</th>
// //         <th className="px-4 py-2 w-48">Ad Domain</th>
// //       </tr>
// //     </thead>
// //     <tbody className="divide-y divide-gray-200">
// //       {visitors.map((v, i) => (
// //         <tr key={i} className="hover:bg-gray-50">
// //           <td className="px-4 py-2">{i + 1}</td>
// //           <td className="px-4 py-2">{renderCell(v.campaign_id)}</td>
// //           <td className="px-4 py-2">{renderCell(v.campaign_name)}</td>
// //           <td className="px-4 py-2">{renderCell(v.adgroup_id)}</td>
// //           <td className="px-4 py-2">{renderCell(v.adgroup_name)}</td>
// //           <td className="px-4 py-2">{renderCell(v.ad_id)}</td>
// //           <td className="px-4 py-2">{renderCell(v.keyword_text)}</td>
// //           <td className="px-4 py-2">{renderCell(v.keyword_match_type)}</td>
// //           <td className="px-4 py-2">{renderCell(v.placement)}</td>
// //           <td className="px-4 py-2">{renderCell(v.placement_type)}</td>
// //           <td className="px-4 py-2">{renderCell(v.ad_url)}</td>
// //           <td className="px-4 py-2">{renderCell(v.ad_domain)}</td>
// //         </tr>
// //       ))}
// //     </tbody>
// //   </table>
// // );
import React from "react";

// Main VisitorTable Component
export const VisitorTable = ({ visitors }) => {
  if (!visitors || visitors.length === 0)
    return (
      <p className="text-center py-10 text-gray-500 font-medium text-lg flex flex-col items-center justify-center">
        <img
          src="https://i.gifer.com/ZZ5H.gif"
          alt="Loading..."
          className="w-12 h-12 mb-4"
        />
        Data is fetching from backend...
      </p>
    );

  return (
    <div className="space-y-10">
      <DataSection title="🌍 IP & Geo Info">
        <GeoInfoTable visitors={visitors} />
      </DataSection>

      <DataSection title="💻 Device Info">
        <DeviceInfoTable visitors={visitors} />
      </DataSection>

      <DataSection title="🔹 Basic Info">
        <BasicInfoTable visitors={visitors} />
      </DataSection>

      <DataSection title="📈 Marketing / Tracking Info">
        <TrackingInfoTable visitors={visitors} />
      </DataSection>
    </div>
  );
};

// Wrapper for table sections
const DataSection = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
    <div className="border rounded-2xl shadow bg-white p-4 overflow-x-auto">
      <div className="overflow-y-auto max-h-[300px] min-w-[1000px]">{children}</div>
    </div>
  </div>
);

// Fallback renderer
const renderCell = (val) => (val ? val : "-");

// Basic Info Table
const BasicInfoTable = ({ visitors }) => (
  <table className="w-full text-sm text-gray-800 table-fixed border-collapse">
    <thead className="sticky top-0 bg-blue-700 text-white">
      <tr>
        <th className="px-4 py-2 w-10">#</th>
        <th className="px-4 py-2 w-40">Session ID</th>
        <th className="px-4 py-2 w-48">Session Started</th>
        <th className="px-4 py-2 w-40">Asset ID</th>
        <th className="px-4 py-2 w-40">Ad Account ID</th>
        <th className="px-4 py-2 w-64">Target URL</th>
        <th className="px-4 py-2 w-48">Timestamp</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-200">
      {visitors.map((v, i) => (
        <tr key={i} className="hover:bg-gray-50">
          <td className="px-4 py-2">{i + 1}</td>
          <td className="px-4 py-2">{renderCell(v.session_id)}</td>
          <td className="px-4 py-2">{renderCell(v.session_start)}</td>
          <td className="px-4 py-2">{renderCell(v.asset_id)}</td>
          <td className="px-4 py-2">{renderCell(v.ad_account_id)}</td>
          <td className="px-4 py-2 truncate">{renderCell(v.target_url)}</td>
          <td className="px-4 py-2">
            {v.timestamp ? new Date(v.timestamp).toLocaleString() : "-"}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

// Geo Info Table
const GeoInfoTable = ({ visitors }) => (
  <table className="w-full text-sm text-gray-800 table-fixed border-collapse">
    <thead className="sticky top-0 bg-green-700 text-white">
      <tr>
        <th className="px-4 py-2 w-10">#</th>
        <th className="px-4 py-2 w-40">IP</th>
        <th className="px-4 py-2 w-24">Proxy</th>
        <th className="px-4 py-2 w-32">Country</th>
        <th className="px-4 py-2 w-32">Region</th>
        <th className="px-4 py-2 w-32">City</th>
        <th className="px-4 py-2 w-24">ZIP</th>
        <th className="px-4 py-2 w-24">LAT LONG</th>
        <th className="px-4 py-2 w-48">Timezone</th>
        <th className="px-4 py-2 w-24">ORG</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-200">
      {visitors.map((v, i) => (
        <tr key={i} className="hover:bg-gray-50">
          <td className="px-4 py-2">{i + 1}</td>
          <td className="px-4 py-2">{renderCell(v.ip)}</td>
          <td className="px-4 py-2">{v.ip_proxy ? "Yes" : "No"}</td>
          <td className="px-4 py-2">{renderCell(v.country)}</td>
          <td className="px-4 py-2">{renderCell(v.region)}</td>
          <td className="px-4 py-2">{renderCell(v.city)}</td>
          <td className="px-4 py-2">{renderCell(v.zip)}</td>
          <td className="px-4 py-2">{renderCell(v.loc)}</td>
          <td className="px-4 py-2">{renderCell(v.timezone)}</td>
          <td className="px-4 py-2">{renderCell(v.org)}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

// Device Info Table
const DeviceInfoTable = ({ visitors }) => (
  <table className="w-full text-sm text-gray-800 table-fixed border-collapse">
    <thead className="sticky top-0 bg-purple-700 text-white">
      <tr>
        <th className="px-4 py-2 w-10">#</th>
        <th className="px-4 py-2 w-40">Device Type</th>
        <th className="px-4 py-2 w-40">OS</th>
        <th className="px-4 py-2 w-40">Browser</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-200">
      {visitors.map((v, i) => (
        <tr key={i} className="hover:bg-gray-50">
          <td className="px-4 py-2">{i + 1}</td>
          <td className="px-4 py-2">{renderCell(v.device_type)}</td>
          <td className="px-4 py-2">{renderCell(v.os)}</td>
          <td className="px-4 py-2">{renderCell(v.browser)}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

// Tracking Info Table
const TrackingInfoTable = ({ visitors }) => (
  <table className="w-full text-sm text-gray-800 table-fixed border-collapse">
    <thead className="sticky top-0 bg-yellow-600 text-white">
      <tr>
        <th className="px-4 py-2 w-10">#</th>
        <th className="px-4 py-2 w-48">UTM Source</th>
        <th className="px-4 py-2 w-48">UTM Medium</th>
        <th className="px-4 py-2 w-48">CG Tag</th>
        <th className="px-4 py-2 w-48">Ad Platform</th>
        <th className="px-4 py-2 w-48">GCLID</th>
        <th className="px-4 py-2 w-48">FBCLID</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-200">
      {visitors.map((v, i) => (
        <tr key={i} className="hover:bg-gray-50">
          <td className="px-4 py-2">{i + 1}</td>
          <td className="px-4 py-2">{renderCell(v.utm_source)}</td>
          <td className="px-4 py-2">{renderCell(v.utm_medium)}</td>
          <td className="px-4 py-2">{renderCell(v.cg_tag)}</td>
          <td className="px-4 py-2">{renderCell(v.ad_platform)}</td>
          <td className="px-4 py-2">{renderCell(v.gclid)}</td>
          <td className="px-4 py-2">{renderCell(v.fbclid)}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
