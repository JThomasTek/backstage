"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[4303],{"../plugins/search/src/components/HomePageComponent/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{HomePageSearchBar:()=>HomePageSearchBar});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),makeStyles=__webpack_require__("../node_modules/@material-ui/core/esm/styles/makeStyles.js"),SearchBar=__webpack_require__("../plugins/search-react/src/components/SearchBar/SearchBar.tsx"),lib=__webpack_require__("../node_modules/qs/lib/index.js"),lib_default=__webpack_require__.n(lib),dist=__webpack_require__("../node_modules/react-router/dist/index.js"),src_plugin=__webpack_require__("../plugins/search/src/plugin.ts"),useRouteRef=__webpack_require__("../packages/core-plugin-api/src/routing/useRouteRef.tsx");const useStyles=(0,makeStyles.A)({searchBarRoot:{fontSize:"1.5em"},searchBarOutline:{border:"1px solid #555",borderRadius:"6px"}}),HomePageSearchBar=props=>{const classes=useStyles(props),[query,setQuery]=(0,react.useState)(""),ref=(0,react.useRef)(null),handleSearch=(()=>{const searchRoute=(0,useRouteRef.S)(src_plugin.rQ),navigate=(0,dist.Zp)();return(0,react.useCallback)((({query})=>{const queryString=lib_default().stringify({query},{addQueryPrefix:!0});navigate(`${searchRoute()}${queryString}`)}),[navigate,searchRoute])})(),handleSubmit=(0,react.useCallback)((()=>{handleSearch({query:ref.current?.value??""})}),[handleSearch]);return(0,jsx_runtime.jsx)(SearchBar.Z,{value:query,onSubmit:handleSubmit,onChange:setQuery,inputProps:{ref},InputProps:{...props.InputProps,classes:{root:classes.searchBarRoot,notchedOutline:classes.searchBarOutline,...props.InputProps?.classes}},...props})};try{HomePageSearchBar.displayName="HomePageSearchBar",HomePageSearchBar.__docgenInfo={description:"The search bar created specifically for the composable home page.",displayName:"HomePageSearchBar",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},focused:{defaultValue:null,description:"If `true`, the component will be displayed in focused state.",name:"focused",required:!1,type:{name:"boolean"}},hiddenLabel:{defaultValue:null,description:"If `true`, the label will be hidden.\nThis is used to increase density for a `FilledInput`.\nBe sure to add `aria-label` to the `input` element.",name:"hiddenLabel",required:!1,type:{name:"boolean"}},endAdornment:{defaultValue:null,description:"",name:"endAdornment",required:!1,type:{name:"React.ReactNode"}},debounceTime:{defaultValue:null,description:"",name:"debounceTime",required:!1,type:{name:"number"}},clearButton:{defaultValue:null,description:"",name:"clearButton",required:!1,type:{name:"boolean"}},onClear:{defaultValue:null,description:"",name:"onClear",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../plugins/search/src/components/HomePageComponent/HomePageSearchBar.tsx#HomePageSearchBar"]={docgenInfo:HomePageSearchBar.__docgenInfo,name:"HomePageSearchBar",path:"../plugins/search/src/components/HomePageComponent/HomePageSearchBar.tsx#HomePageSearchBar"})}catch(__react_docgen_typescript_loader_error){}}}]);