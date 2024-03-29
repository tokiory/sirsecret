package main

import (
	"embed"

    "github.com/wailsapp/wails/v2/pkg/options/mac"
	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
	"github.com/wailsapp/wails/v2/pkg/options/assetserver"
	"github.com/wailsapp/wails/v2/pkg/options/windows"
)

//go:embed all:frontend/dist
var assets embed.FS

func main() {
	// Create an instance of the app structure
	app := NewApp()
	title := "Sir, Secrets!"

	// Create application with options
	err := wails.Run(&options.App{
		Title:  title,
		Width:  1024,
		Height: 768,
		Windows: &windows.Options {
            WindowIsTranslucent:               true,
            WebviewIsTransparent:              true,
		},
		Mac: &mac.Options{
            TitleBar: &mac.TitleBar{
                TitlebarAppearsTransparent: false,
                HideTitle:                  false,
                HideTitleBar:               false,
                FullSizeContent:            false,
                UseToolbar:                 false,
                HideToolbarSeparator:       true,
            },
            Appearance:           mac.NSAppearanceNameDarkAqua,
            WebviewIsTransparent: true,
            WindowIsTranslucent:  true,
            About: &mac.AboutInfo{
                Title:   title,
                Message: "© 2021 Me",
            },
        },
		AssetServer: &assetserver.Options{
			Assets: assets,
		},
		BackgroundColour: &options.RGBA{R: 27, G: 38, B: 54, A: 1},
		OnStartup:        app.startup,
		Bind: []interface{}{
			app,
		},
	})

	if err != nil {
		println("Error:", err.Error())
	}
}
