import React, {FC} from 'react';
import {Avatar, Box, Button, IconButton, Paper} from "@mui/material";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import darcula from "react-syntax-highlighter/dist/cjs/styles/prism/coldark-dark";
import {Icon} from "@iconify/react";
import {Stack} from "@mui/system";

const markdown = `
You can pass components to change things:
\`\`\`js
import React from 'react'
import ReactDOM from 'react-dom'
import Markdown from 'react-markdown'
import MyFancyRule from './components/my-fancy-rule.js'
\`\`\`
@what is important?
`

const CodeCopyBtn = ({children}: any) => {
    const [copyOk, setCopyOk] = React.useState(false);

    const handleClick = () => {
        navigator.clipboard.writeText(children);

        setCopyOk(true);
        setTimeout(() => {
            setCopyOk(false);
        }, 1000);
    }

    return (
        <Box sx={{textAlign: 'right', mb: -1}}>
            <Button
                size="small"
                startIcon={<Icon icon={copyOk ? "hugeicons:checkmark-square-03" : "hugeicons:copy-01"} />}
                color={copyOk ? "success" : "primary"}
                onClick={handleClick}>
                {
                    copyOk ? "Copied" : "Copy"
                }
            </Button>
        </Box>
    )
}


const Pre = ({ children }: any) => {
    return (
        <pre>
            <CodeCopyBtn>{children}</CodeCopyBtn>
            {children}
        </pre>
    )
}


const components = {
    code({node, inline, className, children, ...props}: any) {
        const match = /language-(\w+)/.exec(className || '');
        return !inline && match ? (
            <SyntaxHighlighter style={darcula} language={match[1]} PreTag="div" {...props}>
                {String(children)}
            </SyntaxHighlighter>
        ) : (
            <code className={className} {...props}>
                {children}
            </code>
        );
    },
};

const SendHistoryItem: FC = () => {
    return (
        <Box sx={{p: 1}}>
            <Stack direction="row" spacing={2}>
                {/*<Box sx={{pt: 2}}>
                    <Avatar variant="rounded">
                        <Icon
                            style={{fontSize: 32}}
                            icon="hugeicons:robotic" />
                    </Avatar>
                </Box>*/}
                <Box
                    sx={{
                        flexGrow: 1
                    }}>
                    <ReactMarkdown
                        components={{
                            pre: Pre,
                            ...components
                        }}
                        rehypePlugins={[rehypeRaw]}
                        remarkPlugins={[remarkGfm]} >
                        {markdown}
                    </ReactMarkdown>
                </Box>
            </Stack>
        </Box>
    );
};

export default SendHistoryItem;