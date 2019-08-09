action "Setup Node.js for use with actions" {
  uses = "actions/setup-node@78148dae5052c4942d5b0f92719061df122a3b1c"
}

workflow "Build & Test" {
  on = "push"
  resolves = ["Test"]
}

action "Build" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "install"
}

action "Test" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Build"]
  args = "test"
}
