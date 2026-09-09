FROM debian:trixie-slim

RUN apt-get update \
    && apt-get install -y systemd systemd-sysv sudo curl gnupg ca-certificates \
    fish bat fd-find ripgrep eza \
    net-tools iproute2 iputils-ping dnsutils netcat-openbsd \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

RUN systemctl mask getty@.service systemd-logind.service apt-daily.timer apt-daily-upgrade.timer
RUN ln -sf /usr/bin/fdfind /usr/bin/fd
RUN ln -sf /usr/bin/batcat /usr/bin/bat

RUN curl -fsSL https://packages.cloud.google.com/apt/doc/apt-key.gpg | gpg --dearmor -o /usr/share/keyrings/gcloud.gpg && \
    printf 'Types: deb\nURIs: https://packages.cloud.google.com/apt\nSuites: cloud-sdk\nComponents: main\nSigned-By: /usr/share/keyrings/gcloud.gpg\n' \
    > /etc/apt/sources.list.d/gcloud.sources

RUN curl -fsSL https://apt.releases.hashicorp.com/gpg | gpg --dearmor -o /usr/share/keyrings/hashicorp.gpg && \
    printf 'Types: deb\nURIs: https://apt.releases.hashicorp.com\nSuites: bookworm\nComponents: main\nSigned-By: /usr/share/keyrings/hashicorp.gpg\n' \
    > /etc/apt/sources.list.d/hashicorp.sources

RUN curl -fsSL https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor -o /usr/share/keyrings/microsoft.gpg && \
    printf 'Types: deb\nURIs: https://packages.microsoft.com/repos/azure-cli/\nSuites: bookworm\nComponents: main\nSigned-By: /usr/share/keyrings/microsoft.gpg\n' \
    > /etc/apt/sources.list.d/azure-cli.sources

RUN curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /usr/share/keyrings/nodesource.gpg && \
    printf 'Types: deb\nURIs: https://deb.nodesource.com/node_26.x\nSuites: nodistro\nComponents: main\nSigned-By: /usr/share/keyrings/nodesource.gpg\n' \
    > /etc/apt/sources.list.d/nodesource.sources

RUN apt-get update \
    && apt-get install -y terraform google-cloud-cli kubectl google-cloud-cli-gke-gcloud-auth-plugin azure-cli \
    nodejs \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

CMD ["/sbin/init"]
