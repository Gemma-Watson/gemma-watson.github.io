 document
                    .getElementById("contact-form")
                    .addEventListener("submit", async function (event) {
                      event.preventDefault();
                      const form = event.target;
                      const data = new FormData(form);
                      const response = await fetch(form.action, {
                        method: form.method,
                        body: data,
                        headers: { Accept: "application/json" },
                      });
                      if (response.ok) window.location.href = "thanks.html";
                      else alert("Something went wrong. Please try again.");
                    });