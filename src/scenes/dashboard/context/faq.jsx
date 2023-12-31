import { Box, Typography, Accordion } from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import {ExpandMoreOutlined} from "@mui/icons-material";
import {useContext} from "react";
import {ColorModeContext, palette} from "../../../theme";

const Question = ({ title, body }) => {
    const colorMode = useContext(ColorModeContext);
    const colors = palette(colorMode.getMode());

    return (
        <Accordion
            defaultExpanded={true}
            sx={{
                backgroundColor: colors.itemContainer,
                color: colors.default,
                borderRadius: "20px",
            }}
        >
            <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
                <Typography fontWeight="600" variant="h5" color={colors.default}>
                    {title}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography color={colors.default}>
                    {body}
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
}

const FAQ = () => {
    return (
        <div id="faq">
            <div className="main-title">
                <p className="font-weight-bold">FAQ</p>
            </div>
            <Box m="20px">
                <Question
                    title="Question1"
                    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                />
                <Question
                    title="Question2"
                    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                />
                <Question
                    title="Question3"
                    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                />
                <Question
                    title="Question4"
                    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                />
            </Box>
        </div>
    );
}

export default FAQ;
