package com.hashitout.dreamydelights.service;

import java.util.List;

import com.hashitout.dreamydelights.dto.request.SiteRequest;
import com.hashitout.dreamydelights.dto.response.SiteResponse;

public interface WebService {

    List<SiteResponse> getSiteData();

    String addSiteData(SiteRequest siteRequest);

    SiteResponse updateSiteData(SiteRequest siteRequest, Long id);

}