FROM debian:trixie-slim

RUN apt-get update \
    && apt-get install -y systemd systemd-sysv sudo net-tools iproute2 iputils-ping curl gnupg ca-certificates \
    fish bat fd-find ripgrep eza \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

RUN systemctl mask getty@.service systemd-logind.service apt-daily.timer apt-daily-upgrade.timer
RUN ln -sf /usr/bin/fdfind /usr/bin/fd
RUN ln -sf /usr/bin/batcat /usr/bin/bat

RUN curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | gpg --dearmor -o /usr/share/keyrings/gcloud.gpg && echo "deb [signed-by=/usr/share/keyrings/gcloud.gpg] https://packages.cloud.google.com/apt cloud-sdk main" | tee /etc/apt/sources.list.d/gcloud.list
RUN curl https://apt.releases.hashicorp.com/gpg | gpg --dearmor -o /usr/share/keyrings/hashicorp.gpg && echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/hashicorp.gpg] https://apt.releases.hashicorp.com bookworm main" | tee /etc/apt/sources.list.d/hashicorp.list
RUN curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor -o /usr/share/keyrings/microsoft.gpg && echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/microsoft.gpg] https://packages.microsoft.com/repos/azure-cli/ bookworm main" | tee /etc/apt/sources.list.d/azure-cli.list
RUN curl https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor > /usr/share/keyrings/nodesource.gpg && echo "deb [signed-by=/usr/share/keyrings/nodesource.gpg] https://deb.nodesource.com/node_26.x nodistro main" | tee /etc/apt/sources.list.d/nodejs.list

RUN apt-get update \
    && apt-get install -y terraform google-cloud-cli kubectl google-cloud-cli-gke-gcloud-auth-plugin azure-cli \
    nodejs \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

RUN npx get-pnpm

CMD ["/sbin/init"]
