import React, { memo } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getPetTravel } from "../slices/PetTravelSlice";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from "@material-ui/core";

import PetTravelStyles from "../components/PetTravelStyles";
import Spinner from "../components/Spinner";
import ErrorView from "../components/ErrorView";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    table: {
        minWidth: 700,
    },
}));

const StyledTableCell = withStyles(() => ({
    head: {
        backgroundColor: "teal",
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
    },
    body: {
        textAlign: "center"
    }
}))(TableCell);

const PetTravel = memo(() => {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.pettravel);

    const classes = useStyles();
    const [partCode, setPartCode] = React.useState("PC03");
    const [pageBlock, setPageBlock] = React.useState(10);

    React.useEffect(() => {
        dispatch(
            getPetTravel({
                partCode: partCode,
                page: 1,
                pageBlock: pageBlock,
            })
        );
    }, [dispatch, partCode, pageBlock]);

    const onChange = React.useCallback((e) => {
        e.preventDefault();
        e.target.name === "partCode" ? setPartCode(e.target.value) : setPageBlock(e.target.value);
    }, []);

    return (
        <>
            <Spinner visible={loading} />
            {error ? (
                <ErrorView error={error} />
            ) : (
                data && (
                    <PetTravelStyles>
                        <h2>강원도 반려동물 동반 관광지 리스트</h2>
                        <div className="select-wrap">
                            <FormControl className={classes.formControl}>
                                <InputLabel id="partCodeLabel">카테고리</InputLabel>
                                <Select labelId="partCodeLabel" id="partCodeSelect" value={partCode} name="partCode" onChange={onChange}>
                                    <MenuItem value={"PC03"}>관광지</MenuItem>
                                    <MenuItem value={"PC02"}>숙박</MenuItem>
                                    <MenuItem value={"PC01"}>식음료</MenuItem>
                                    <MenuItem value={"PC04"}>체험</MenuItem>
                                    <MenuItem value={"PC05"}>동물병원</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl className={classes.formControl}>
                                <InputLabel id="pageBlockLabel">게시물 개수</InputLabel>
                                <Select labelId="pageBlockLabel" id="pageBlockSelect" value={pageBlock} name="pageBlock" onChange={onChange}>
                                    {[...new Array(5)].map((v, i) => {
                                        return (
                                            <MenuItem key={i} value={(i + 1) * 10}>
                                                {(i + 1) * 10}개
                                            </MenuItem>
                                        );
                                    })}
                                </Select>
                            </FormControl>
                        </div>
                        <TableContainer component={Paper}>
                            <Table className={classes.table}>
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>카테고리</StyledTableCell>
                                        <StyledTableCell>가게명</StyledTableCell>
                                        <StyledTableCell>지역</StyledTableCell>
                                        <StyledTableCell>상세주소</StyledTableCell>
                                        <StyledTableCell>전화번호</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {data[0].resultList.map((v, i) => {
                                        return (
                                            <TableRow key={v.contentSeq}>
                                                <StyledTableCell>{v.partName}</StyledTableCell>
                                                <StyledTableCell>{v.title}</StyledTableCell>
                                                <StyledTableCell>{v.areaName}</StyledTableCell>
                                                <StyledTableCell>{v.address}</StyledTableCell>
                                                <StyledTableCell>{v.tel}</StyledTableCell>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </PetTravelStyles>
                )
            )}
        </>
    );
});

export default PetTravel;
