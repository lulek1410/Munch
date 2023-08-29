import loadImage from "../loadImage";

describe("loadImage function", () => {
	it("should resolve with the provided image URL", async () => {
		const mockImageInstance = {
			onload: null as (() => void) | null,
			onerror: null as ((error: Error) => void) | null,
			src: "",
		};
		const mockImageConstructor = jest.fn(() => mockImageInstance);
		(global as any).Image = mockImageConstructor;

		const imageUrl = "mock_image_url.png";
		const promise = loadImage(imageUrl);

		mockImageInstance.onload?.();

		await expect(promise).resolves.toBe(imageUrl);
	});

	it("should reject with an error on image load error", async () => {
		const mockImageInstance = {
			onload: null as (() => void) | null,
			onerror: null as ((error: Error) => void) | null,
			src: "",
		};
		const mockImageConstructor = jest.fn(() => mockImageInstance);
		(global as any).Image = mockImageConstructor;

		const imageUrl = "mock_image_url.png";
		const promise = loadImage(imageUrl);

		mockImageInstance.onerror?.(new Error("Image load error"));

		await expect(promise).rejects.toThrow("Image load error");
	});
});
