import { Page } from '@playwright/test';
import PageObjectHelpers from './helper/PageObjectHelpers';

export class ImageGenerationPage {
    private base: PageObjectHelpers

    constructor(private page: Page) {
        this.base = new PageObjectHelpers(page);
    }

    private Elements = {
        ImgGenerationLink: "a.chakra-link[href='/image-generation']",
        closeModalImageGenerationBtn: "button[aria-label='Previous']",
        closeModalLandingPageBtn: 'button[data-tracking-id="elements_introduction_modal_close"]'
    }

    async closeModalImageGeneration() {
        await this.closeModal(this.Elements.closeModalImageGenerationBtn);
    }

    async closeModalLandingPage() {
        await this.closeModal(this.Elements.closeModalLandingPageBtn);
    }

    async closeModal(btnLocator: string) {
        await this.base.waitAndClick(btnLocator);
    }

    async clickImageGeneration() {
        await this.clickLink(this.Elements.ImgGenerationLink);
    }

    async clickLink(input_link: string) {
        await this.base.waitAndClick(input_link);
    }
}
