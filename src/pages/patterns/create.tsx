import React, {useEffect} from 'react'
import {useRouter} from 'next/router'

import Button from 'components/common/Button';
import {Container} from 'components/common/Layout'
import Form, {TextInput, Textarea, Multiselect, FileUploader, FormGroup} from 'components/Form'

import API from 'utils/api'

const mutation = (args) => ({
    addPattern: {
        __args: args,
        cost: true,
        title: true,
        craft: true,
        notes: true,
        author: true,
        yardage: true,
        category: true,
        hookSize: true,
        languages: true,
        needleSize: true,
        yarnWeight: true,
        difficulty: true,
        description: true,
        publication: true,
        downloadUrl: true,
        suggestedYarn: true,
        publicationDate: true,
        originalSource: {
            url: true,
            name: true,
        },
        images: {
            src: true,
            alt: true,
            primary: true,
        },
    },
})

export default function CreatePattern({API, patternData, ...props}) {
    const router = useRouter();

    const onSubmit = (content) => {
        // TODO: figure out how graphql accepts images
        // TODO: massage images into an array like the query
        // TODO: normalize languages to be as the query needs it
        // TODO: properly convert difficulty to a number
        API.post({
            type: 'ADD_PATTERN',
            mutation: mutation(content),
            dispatch: () => {} // might not need this
        })
        // console.log({content});
    }

    useEffect(() => {
        if (process.env.NODE_ENV === 'production') {
            router.back()
        }
    })

    return (
        <Container>
            <Form id="addRateForm" onSubmit={onSubmit}>
                <TextInput id="title" labelText="Pattern Name" />
                <TextInput id="author" labelText="Author" />
                <FileUploader
                    id="primaryImage"
                    labelText="Primary Image"
                    buttonText="Primary Image"
                    fileTypes={['.jpeg', '.jpg', '.png']}
                />
                <FileUploader
                    id="additionalImages"
                    selectMultiple={true}
                    labelText="Additional Images"
                    buttonText="Additional Image"
                    fileTypes={['.jpeg', '.jpg', '.png']}
                />
                <Textarea id="notes" labelText="Notes" />
                <TextInput id="cost" labelText="Cost" type="number" />
                <Textarea id="description" labelText="Description" />
                <FileUploader
                    id="patternPDF"
                    labelText="Pattern Document"
                    buttonText="Pattern Document"
                    fileTypes={['.pdf']}
                />
                <Multiselect
                    id="languages"
                    items={[
                        {
                            id: 'usa',
                            label: 'English (US)',
                        },
                        {
                            id: 'spain',
                            label: 'Spanish',
                        },
                    ]}
                    labelText="Pattern Languages"
                    placeholder="Select Available Languages"
                />
                <TextInput
                    id="difficulty"
                    labelText="Difficulty"
                    type="number"
                />
                <TextInput id="publication" labelText="Publication" />
                <TextInput id="craft" labelText="Craft" />
                <TextInput id="category" labelText="Category" />
                <TextInput
                    id="publicationDate"
                    labelText="Publication Date"
                    type="number"
                />
                <TextInput id="suggestedYarn" labelText="Suggested Yarn" />
                <TextInput id="yarnWeight" labelText="Yarn Weight" />
                <TextInput id="needleSize" labelText="Needle Size" />
                <TextInput id="hookSize" labelText="Hook Size" />
                <TextInput id="yarnage" labelText="Yarnage" />
                <FormGroup>
                    <TextInput
                        id="originalSource[name]"
                        labelText="Original Source Name"
                    />
                    <TextInput
                        id="originalSource[url]"
                        labelText="Original Source Url"
                    />
                </FormGroup>
                <FormGroup>
                    <Button type="submit">Submit</Button>
                    <Button type="reset" color="bizarre">Cancel</Button>
                </FormGroup>
            </Form>
        </Container>
    )
}
