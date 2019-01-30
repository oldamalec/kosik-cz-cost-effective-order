# Kosik.cz product cost effective ordering

## What it does?

* This extension allows you to sort loaded products on kosik.cz by cost-efficiency, placing the chepest-per-amount products first.

## Installation

* _This extension is currently not released to the Chrome Web Store. To install it locally:_

	* `git clone` **OR** download this source.
	* Open Chrome, navigate to `chrome://extensions/`.
	* Enable **Developer mode**.
	* Click **Load unpacked**.
	* Select the root of the downloaded source.
	* Extension icon should now appear in the top bar.

## Usage

* Open https://www.kosik.cz.
* Navigate to any page which lists products.
* Click on the built-in ordering selector in the upper right.
* Option 'Nejvýhodnější' should appear there.

## Update

* Either `git pull` **OR** manually download and replace the source with newest version.
* At `chrome://extensions/` click on the 'reload' button on this extension's card (next to 'enabled toggle').

## Notes

* This feature only orders already loaded products, this means that when there are more products down below, which are not loaded into DOM, they are not processed.
* When there are multiple types of quantity price (eg. `Kč / kg` and `Kč / l`), the script sorts everything just by the amount, regardless of the quantity type.
