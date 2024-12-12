use tauri_plugin_http::reqwest;

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command(async)]
async fn fetch_get(url: String) -> Result<String, String> {
    println!("Fetching: {}", url);
    let resp = reqwest::get(&url).await;
    match resp {
        Ok(resp) => {
            let body = resp.text().await;
            match body {
                Ok(body) => Ok(body),
                Err(err) => Err(
                    format!("Failed to read body: {}", err).to_string()),
            }
        }
        Err(err) => Err(
            format!("Failed to fetch: {}", err).to_string()
        ),
    }
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![greet])
        .invoke_handler(tauri::generate_handler![fetch_get])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
