// Copyright (c) 2021 Sri Lakshmi Kanthan P
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT


/**
 * Adds repo cards to page
 */
async function addRepoCards() {
    // Get Repos from Github
    let repos = await fetch(`https://api.github.com/users/srilakshmikanthanp/repos`)
    .then(response => response.json())
    .then(response => {
        return response;
    });

    // Add Repo Cards
    for(let repo of repos) {
        $("#repos-content").append(`
            <a href="${repo['html_url']}" class="repo" target="_blank">
                <div class="top_sec">
                    ${repo['name']}
                </div>
                <div class="mid_sec">
                    ${repo['description']}
                </div>
                <div class="bot_sec">
                    <div> 
                        ${repo['language']}
                    </div>
                    <div>
                        <i class="fas fa-star"></i>
                        ${repo['stargazers_count']}
                    </div>
                    <div>
                        <i class="fas fa-code-branch"></i>
                        ${repo['forks_count']}
                    </div>
                </div>
            </a>
        `);
    }
}

/**
 * on Dom Load
 */
$(function () {
    addRepoCards();
    feather.replace();
});